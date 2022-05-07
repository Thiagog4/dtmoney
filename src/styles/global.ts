import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background:#f0f2f5;
    --red:#E62E4D;
    --green:#33CC95;
    --blue:#5429cc;
    --blue-ligth:#6933FF;
    --text-title:#363f5f;
    --text-body:#969cb3;
    --shape:#ffffff;

}

body , input,textarea,button{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
}


h1,h2,h3,h4,h5,h6{
    font-weight: 600;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

//font-size:16px(desktop);
html{
    @media(max-width:1080px){
        font-size:93.75%;
    }


    @media (max-width:720px){
        font-size:87.5%;
    }
}
//rem - 1rem=font-size = 16px
body{
    background: var(--background) ;
    -webkit-font-smoothing:antialiased;
}
button{
    cursor: pointer;
}


[disabled]{
    opacity:0.6;
    cursor:not-allowed;
}
`