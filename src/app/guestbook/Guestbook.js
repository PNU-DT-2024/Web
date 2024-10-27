import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Masonry from 'react-masonry-css';
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import guestBookService from "../../api/guestBookService";
import Title from "../common/Title";
import styles from "../../css/Guestbook.module.css"

function Guestbook() {
  const [guestBookEntries, setGuestBookEntries] = useState([]);
  const [from, setFrom] = useState("");
  const [comment, setComment] = useState("");
  const [to, setTo] = useState("");
  const [filter, setFilter] = useState(""); // 필터 상태 추가
  // const [click, setClick] = useState(false);

  const names = [
    "모두에게",
    "김경린",
    "김동성",
    "김은선",
    "박서해",
    "박승찬",
    "박정혜",
    "오여슬",
    "왕신웨",
    "이민서",
    "이상화",
    "이지은",
    "조성원",
    "최시아",
  ];

  useEffect(() => {
    loadGuestBookEntries();
  }, []);

  const loadGuestBookEntries = async () => {
    try {
      let fetchedEntries = await guestBookService.getGuestBook();
      // fetchedEntries가 배열이 아니라 객체인 경우도 Object.values를 사용하여 배열로 변환
      fetchedEntries = Array.isArray(fetchedEntries)
        ? fetchedEntries
        : Object.values(fetchedEntries);
      // 시간순 정렬: 최신 항목이 먼저 오도록 정렬
      const sortedEntries = fetchedEntries.sort(
        (a, b) => new Date(b.createdTime) - new Date(a.createdTime)
      );
      setGuestBookEntries(sortedEntries);
    } catch (error) {
      console.error("Error loading guestbook entries:", error);
      setGuestBookEntries([]);
    }
  };

  const filteredGuestBookEntries = filter
    ? guestBookEntries.filter((entry) => entry.to === filter)
    : guestBookEntries;

  const handlePostGuestBook = async () => {
    try {
      await guestBookService.postGuestBook(from, comment, to);
      setFrom("");
      setComment("");
      setTo("");
      loadGuestBookEntries();
    } catch (error) {
      console.error("Error posting to guestbook:", error);
    }
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };
  const renderGuestBookEntries = () => {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {filteredGuestBookEntries.map((entry) => (
          <div key={entry.id} className={`${styles.messageBox} column`}>
            <span>To. {entry.to}</span>
            <p className="description">{entry.comment}</p>
            <p>From. {entry.from}</p>
            {/* <p>Created Time: {entry.createdTime}</p> */}
          </div>
        ))}
      </Masonry>
    );
  };

  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  return (
    <div>
      <Menu page='GUESTBOOK' />
      <main className={`contentsContainer ${isMobile && styles.m_guestBook}`}>
        {isMobile || <Title title="GUESTBOOK" />}
        <div className={styles.txtDeco}>
          <p>학생들에게</p>
          <p>응원의 한마디를</p>
          <p>남겨주세요</p>
        </div>
        <section className={styles.sent}>
          <div className={`${styles.write} ${isMobile ? 'column' : 'row'}`}>
            <div className={`${styles.left} column`}>
              <div className="row">
                <label>To.</label>
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="row">
                <label>From.</label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="보내는 이"
                />
              </div>
            </div>
            <div className={styles.right}>
              <textarea className={styles.textarea} rows="10"
                value={comment}
                onChange={(e) => setComment(e.target.value)
                }
                placeholder="길동아 수고했어!!"
              />
            </div>
          </div>
          <div className={styles.btnSent}>
            <button onClick={handlePostGuestBook}>보내기</button>
          </div>
        </section>
        <section className={`${styles.message} ${isMobile ? 'column' : 'row'}`}>
          {isMobile ? <select className={styles.m_optionList} value={filter} onChange={(e) => setFilter(e.target.value)}>
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select> : <div className={styles.optionList} onChange={(e) => setFilter(e.target.value)}>
            {names.map((name) => (
              <option key={name} value={name} onClick={(e) => setFilter(name)}>
                {name}
              </option>
            ))}</div>}
          <div>{renderGuestBookEntries()}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Guestbook;
