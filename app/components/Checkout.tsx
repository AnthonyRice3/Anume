
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative text-center">
          <p className="text-3xl">🔥</p>
          <h1 className="mx-auto mt-12 max-w-xl text-balance text-5xl font-medium text-white">
            Thanks For Choosing Anume!
          </h1>
          <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl text-slate-400">
            We appreciate your support and are excited to have you as part of our community. Everything we do is designed to enhance your experience and provide you with the best service possible.
          </p>
          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
            
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl bg-black/10">
          <Image
            src="/logo1.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
            width={1920}
            height={1080}
          />

          <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
            <Image
              src="/logo1.png"
              alt="app screen"
              width="2880"
              height="1842"
              className="object-top-left size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}