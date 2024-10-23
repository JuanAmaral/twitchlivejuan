export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-2 md:flex-row flex-col">
        <iframe
          src="https://player.twitch.tv/?channel=juanamaral&parent=twitchlivejuan.vercel.app"
          height="720"
          width="1280"
          allowFullScreen={true}
        ></iframe>
        <iframe
          src="https://www.twitch.tv/embed/juanamaral/chat?parent=twitchlivejuan.vercel.app"
          height="500"
          width="350"
        ></iframe>
      </div>
    </div>
  );
}
