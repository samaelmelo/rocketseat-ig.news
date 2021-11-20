import Document,{Html, Head, Main, NextScript} from "next/document"

// configuração padrão do arquivo _document
export default class MyDocument extends Document {
  render(){
    return(
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700;1,900&display=swap" rel="stylesheet"></link>
          </Head>
          <body>
            <Main/>
            
            {/* arquivo de script onde a mágina acontece */}
            <NextScript/>
          </body>
        </Html>
    )
  }
}