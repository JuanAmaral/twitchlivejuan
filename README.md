# Twitch Live Stream Embed - Juan Amaral
Este projeto é uma página simples em Next.js que incorpora uma live do canal Juan Amaral no Twitch, juntamente com o chat ao vivo em modo escuro (dark mode).

## Funcionalidades
Player de vídeo ao vivo da Twitch.
Chat ao vivo da Twitch, ambos no modo escuro.
Layout responsivo usando Tailwind CSS.
## Como começar
### 1. Clonar o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/twitch-live-stream-embed.git
cd twitch-live-stream-embed
### 2. Instalar as dependências:

``` bash
yarn install
```
### 3. Iniciar o projeto:
``` bash
yarn dev
```
O site estará disponível em http://localhost:3000.


## Estrutura do Código
Este projeto usa Next.js e Tailwind CSS para o layout e estilização. Abaixo está a explicação de cada parte do código principal.

javascript
``` 
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-8 xl:flex-row flex-col w-full">
        <div className="xl:w-4/5 w-full">
          <iframe
            src="https://player.twitch.tv/?channel=juanamaral&parent=twitchlivejuan.vercel.app&darkpopout"
            height="720"
            width="100%"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="xl:w-1/5 w-full">
          <iframe
            src="https://www.twitch.tv/embed/juanamaral/chat?parent=twitchlivejuan.vercel.app&darkpopout"
            height="720"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
```
## 4. **Chat da Twitch**

Para incorporar o chat ao vivo da Twitch, utilizamos outro `iframe`.

```html
<iframe
  src="https://www.twitch.tv/embed/juanamaral/chat?parent=twitchlivejuan.vercel.app&darkpopout"
  height="720"
  width="100%"
></iframe>
```


Pensou por 18 segundos

Claro! Aqui está a seção formatada em Markdown com títulos (##, ####) e blocos de código (```), pronta para ser adicionada ao seu README.md:

markdown
Copiar código
#### 4. **Chat da Twitch**

Para incorporar o chat ao vivo da Twitch, utilizamos outro `iframe`.

```html
<iframe
  src="https://www.twitch.tv/embed/juanamaral/chat?parent=twitchlivejuan.vercel.app&darkpopout"
  height="720"
  width="100%"
></iframe>
```
### Explicação do src:
* https://www.twitch.tv/embed/: URL base para o chat embutido do Twitch.
* juanamaral/chat: Especifica o canal cujo chat está sendo incorporado (juanamaral).
* ?parent=twitchlivejuan.vercel.app: Parâmetro obrigatório para informar o domínio onde o chat está sendo exibido.
* &darkpopout: Ativa o modo escuro no chat, mantendo o tema do site.
