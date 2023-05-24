import Raccoon3d from "@/components/Raccoon3d";
import Button from "@/components/UI/Button";
import Feature from "@/components/UI/Feature";
import Hero from "@/components/UI/Hero";
import Involve from "@/components/UI/Involve";
import Link from "next/link";

export default async function Home() {
  const data: any = await getData();
  return (
    <main>
      <section className="container">
        <div className="grid md:grid-cols-2 md:mx-auto md:items-center">
          <div className="max-md:pt-5">
            <p className="text-3xl md:w-96 mx-auto font-semibold">
              {data["title-main-section"]}
            </p>
            <div className="md:w-96 mx-auto">
              <p>{data["description-main-section"]}</p>
              <Link className="mx-auto" href={data["link-download"]}>
                <Button>Скачать</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-96 md:h-96 max-md:w-64 max-md:h-64 max-md:mx-auto">
            <Raccoon3d />
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-3 max-md:gap-5 md:mx-auto mt-2">
        <Feature emoji="🙃" about="Простой">
          Код Raccoon настолько простой и длинный, что капец
        </Feature>
        <Feature emoji="🤤" about="Быстрый">
          Скорость как у Ruby
        </Feature>
        <Feature emoji="😦" about="Мощный">
          На Raccoon можно решать любые задачи
        </Feature>
      </section>
      <section className="mt-10 mx-auto">
        <h1 className="text-2xl text-center">Присоединяйтесь к созданию</h1>
        <div className="grid md:grid-cols-3 max-md:gap-2 mt-2">
          <Involve
            title="GitHub"
            imageLink="/github-logo.png"
            link="https://github.com/RCSource/raccoon"
          />
          <Involve
            title="Telegram"
            imageLink="/telegram-logo.png"
            link="https://t.me/rubycoding"
          />
          <Involve
            title="Discord"
            imageLink="/discord-logo.png"
            link="https://discord.gg/HD8t3t88yd"
            className="mt-6"
          />
        </div>
      </section>
    </main>
  );
}

const getData = async () => {
  const res = await fetch(
    "https://api.cosmicjs.com/v3/buckets/raccoon-production/objects/646dc322d97da800083d4143?read_key=vRqh2Se9jx6n0jQq5xOV9d6httEfgUntNOCia9jXL0oaPzwKuE&depth=1&props=metadata"
  );

  const data = await res.json();
  const { metadata } = data.object;
  return metadata;
};
