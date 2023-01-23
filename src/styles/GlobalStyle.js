import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
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
time, mark, audio, video, input,button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
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

body {
    background:var(--purple);
	font-family:'Lexend Deca';
	width: 100vw;
	height: 100vh;
	font-weight: 400;
	p{
	font-size:1.797rem;
	line-height:2.2rem;
	color:var(--light-black);
	}
	h1{
		font-size:2.298rem;
	line-height:2.872rem;
	color:var(--white);
	text-align: center;
	}
}

html{
	
	font-size:62.5%;
	--white:#FFFFFF;
	--blue:#52B6FF;
	--dark-blue:#126BA5;
	--light-gray:#EBEBEB;
	--gray:#E5E5E5;
	--dark-gray:#CFCFCF;
	--green:#8FC549;
	--light-black:#666666;
	--border-check:#E7E7E7;
	--border-input:#D4D4D4;
	--font-input:#DBDBDB;
	--font-gray:#BABABA;
    --light-purple:#A328D6;
    --purple:#8c11be;
    --black:#000000;
 }

 form{
    display:flex;
	flex-direction:column;
	align-items:center;

	input, button{
		box-sizing: border-box;
		border-radius:0.5rem;
		width:32.6rem;
		height:5.8rem;

	}
	input{
		border:0.1rem solid var(--border-input);
		margin-bottom: 1.3rem;	
		&::placeholder{
			color:var(--black);	
			font-size: 2rem;
			line-height: 2.5rem;
			letter-spacing: 0em;
			text-align: left;
			padding-left:1.1rem;
	}
		}
	button{
		background-color:var(--light-purple);
		color: var(--white);
		font-size: 2.1rem;
		line-height: 2.6rem;
		letter-spacing: 0em;
		text-align: center;
	}

	a{
        text-decoration: none;
		color:var(--white);
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0em;
		text-align: center;
        margin-top:3.2rem;
	}
	
}
`

export default GlobalStyle