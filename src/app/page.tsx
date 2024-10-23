export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <iframe
        src="https://player.twitch.tv/?channel=juanamaral&parent=twitchlivejuan.vercel.app"
        height="720"
        width="100%"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
