export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
