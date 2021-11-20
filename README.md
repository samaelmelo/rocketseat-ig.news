## css scoped

 - quando você adiciona no arquivo a extensão .module 

 

 - o css fica escopado, isso quer dizer quando ele for gerado no html da pagina
 terá uma identificação única, será gerado um valor hash, não podendo, a menos que queira, inviabilizando uma duplicidade de identificação.

 - o css scoped só é utilizado em classes e id's

obs: Se você quer utilziar uma formatação css global para todos os elementos, e isso acontece geralmente nos reset's, não é aconcelhável utilizar a extensão .module, porque o .module não cria elementos globais, mas sim identificadores ou classes únicas.
## Configuração do css scoped

[ ] nome do arquivo
  - style.module.css/sass

[ ] importação do arquivo no js
  - import *styles* from "./style.module.css"

[ ] utilização da class ou id na tag do aquivo js
  - className={styles.nomeDaClasse}
  - id={styles.nomeDoId}


[ ] o css global deve ser importado dentro do _app, jamais dentro do _document.
#
## Difenreças entre _app _document


[ ] _app -> recarregado todas às vezes que mudar de página e ele sempre fica envolta de tadas as páginas

[ ] _document -> carregado apenas uma vez, no onload da página


#


# Title para cada página

Ao colocar o title no _document isso estará significando que você terá o mesmo title para todas as páginas, entretanto, isso não seria uma boa prática.
A solução para este problema seria colocar um title em cada página crida.

[ ] - import Head fro "next/document"

[ ] - <Head> 
         <title> nome</title>
      </Head>

#

## Arquivo de images/assets

Estes arquivos ou pastas **devem** ser colocados dentro da pasta public. 
Este é o modo padrão do next identificar a pasta public.
Quando for usar o arquivos dentro de cada tag basta apenas identificar a pasta public com "/", barra . 


[ ] - <img src="/nomedapastaouimage">

para importar os arquivos dentro do tsx ou jsx o next utiliza um plugin chamado next-

#

## Refletir um component em todas as páginas

Quando precisar utilizar um componente que se repete em diversas página, por exemplo um header, você deve colocar este componente dentro do arquivo _app 


<!-- function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
} -->