import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//reset css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	// font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6{
	cursor:default;
	line-height:100%;
}
h1{
	font-size:3rem;
	font-weight:500;
	white-space:nowrap;
	}
h2{
	font-size:1.5rem;
	font-weight:500;		
}
	hr{
    height: 1px;
    width: 100%;
	border: none;
    background-color: #000;
	margin:0;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
	// main{
	// width:100%
	// }
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
a{color: #000; text-decoration: none; outline: none}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
	button{
	cursor:pointer;}
//------------------------------------------------------------------------------
* { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
body{
	background-color : var(--bg) ;
}
.eng{font-family: 'Times New Roman', Times, serif; }
.ko{    font-family: "sandoll-jebi2", sans-serif;
    font-weight: 700;}
#root>div>div{
	min-height : 100vh;
	display:flex;
	flex-direction:column;
}
nav, main, footer{
	flex:2;
}
	nav, footer{
	flex-grow : 0;
	}
.contentsContainer{
	padding: 64px var(--padding) 128px;

}
.box{
  padding: 0 var(--padding) ;
  
}
.description{
	line-height:170%;
	font-size:1rem;
}

.row{
    display: flex;
    flex-direction: row;
}
.column{
    display: flex;
    flex-direction: column;
}
:root{
	--padding : 200px;
	--line : #dbdbdb;
	--mainColor : #EF856D;
	--subColor : #F6AE6A;
	--bg : #F5F5F5;
	--black: #121212;
	
}
@media all and (max-width:767px){
	:root{
		--padding : 20px;
	}
	h2{
		font-size:1.25rem;		
	}
	.contentsContainer{
		padding: 40px var(--padding) 128px;	
	}
	.description{
		font-size:1rem;
	}
	h1{
		font-size:2.5rem
	}
}
@media all and (max-width: 1080px) and (min-width: 768px) {
	:root{
		--padding : 50px;
	}
}
`;
export default GlobalStyles;