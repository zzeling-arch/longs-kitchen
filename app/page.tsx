"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen text-white">
      <section
        className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-4 md:px-8 py-6">
          <h1 className="text-2xl font-bold text-red-500">湘味馆</h1>

          <div className="flex gap-6 text-white">
            <a href="/menu">
              {lang === "en" ? "Menu" : "菜单"}
            </a>
            <a href="#about">
              {lang === "en" ? "About" : "关于我们"}
            </a>
            <a href="#contact">
              {lang === "en" ? "Contact" : "联系我们"}
            </a>

            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("zh")}>中文</button>
          </div>
        </nav>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="mb-4 text-6xl font-bold text-red-500 md:text-8xl">
            {lang === "en" ? "Long's Kitchen" : "湘味馆"}
          </h1>

          <h2 className="mb-6 text-4xl tracking-wide md:text-5xl">
            {lang === "en" ? "Authentic Hunan Cuisine" : "正宗湖南风味"}
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            {lang === "en"
              ? "Bold Hunan Flavor. Modern Chinese Dining."
              : "香辣湘味，地道湖南菜。"}
          </p>

          <div className="flex justify-center gap-4 rounded-full bg-black/20 px-6 py-4 backdrop-blur-sm">
            <a
              href="/menu"
              className="rounded-full bg-red-600 px-6 py-3 hover:bg-red-700"
            >
              {lang === "en" ? "View Menu" : "查看菜单"}
            </a>

            <a
              href="/order"
              className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              {lang === "en" ? "Order Online" : "在线订购"}
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="bg-black px-8 py-24 text-white">

        <h2 className="mb-16 text-center text-5xl font-bold">
          {lang === "en" ? "Signature Dishes" : "招牌菜"}
        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          <div className="overflow-hidden rounded-3xl bg-neutral-900">
            <img
              src="/dish1.jpg"
              alt="Hunan Beef"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold">
                {lang === "en" ? "Spicy Hunan Beef" : "小炒黄牛肉"}
              </h3>

              <p className="text-gray-400">
                {lang === "en"
                  ? "Wok-fired sliced beef with fresh chili peppers and signature Hunan spice."
                  : "鲜辣下饭，锅气十足的经典湖南小炒。"}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-neutral-900">
            <img
              src="/dish2.jpg"
              alt="Fish Head"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold">
                剁椒鱼头
              </h3>

              <p className="text-gray-400">
                {lang === "en"
                  ? "Steamed fish head topped with vibrant chopped chili sauce."
                  : "剁椒鲜香浓郁，经典湘菜招牌鱼头。"}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-neutral-900">
            <img
              src="/dish3.jpg"
              alt="Braised Pork"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold">
                毛氏红烧肉
              </h3>

              <p className="text-gray-400">
                {lang === "en"
                  ? "Slow-braised pork belly glazed in rich soy caramel sauce."
                  : "肥而不腻，酱香浓郁的湖南红烧肉。"}
              </p>
            </div>
          </div>

        </div>

      </section>
      <section className="bg-neutral-950 px-8 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
              {lang === "en" ? "Our Story" : "关于我们"}
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              {lang === "en"
                ? "Authentic Hunan Flavor, Reimagined for Today."
                : "传统湘味，现代呈现。"}
            </h2>

            <p className="text-gray-400">
              {lang === "en"
                ? "From wok-fired beef to chopped chili fish head, every dish is crafted with intensity, freshness, and the unmistakable flavor of Hunan cuisine."
                : "从小炒黄牛肉到剁椒鱼头，每一道菜都充满锅气、鲜辣和地道湖南风味。"}
            </p>
          </div>

          <div className="rounded-3xl border border-red-500/30 bg-black p-8">
            <div className="grid gap-6">
              <div>
                <h3 className="text-2xl font-bold text-red-500">01</h3>
                <p className="text-gray-300">
                  {lang === "en" ? "Fresh chili and bold aromatics" : "新鲜辣椒与浓郁香气"}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-500">02</h3>
                <p className="text-gray-300">
                  {lang === "en" ? "Wok-fired flavor with real heat" : "锅气十足，鲜辣有劲"}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-500">03</h3>
                <p className="text-gray-300">
                  {lang === "en" ? "Modern Chinese dining experience" : "现代中式用餐体验"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black px-8 py-24 text-white">

        <h2 className="mb-16 text-center text-5xl font-bold">
          {lang === "en"
            ? "What Our Guests Say"
            : "顾客评价"}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              {lang === "en"
                ? "Probably the best Hunan food I’ve had in Los Angeles."
                : " probably 是我在洛杉矶吃过的最好的湖南菜。"}
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {lang === "en" ? "Google Review" : "谷歌评价"}
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              {lang === "en"
                ? "Authentic spice, amazing wok flavor, and beautiful atmosphere."
                : "地道的辣味、令人惊叹的锅气和美丽的氛围。"}
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {lang === "en" ? "Yelp Review" : "Yelp评价"}
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              {lang === "en"
                ? "“The chopped chili fish head was incredible.”"
                : "“剁椒鱼头简直太棒了。”"}
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {lang === "en" ? "Customer Review" : "顾客评价"}
            </p>
          </div>

        </div>

      </section>
      <section
        id="contact"
        className="border-t border-neutral-800 bg-black px-8 py-16 text-white"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-red-500">
              {lang === "en" ? "Long's Kitchen" : "湘味馆"}
            </h3>

            <p className="text-gray-400">
              {lang === "en"
                ? "Authentic Hunan Cuisine. Bold Spice. Wok-Fired Flavor."
                : "正宗湖南菜，香辣浓郁，锅气十足。"}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              {lang === "en" ? "Contact" : "联系我们"}
            </h4>

            <p className="text-gray-400">
              {lang === "en" ? "(949) 379-6188" : "（949）379-6188"}
            </p>

            <p className="text-gray-400">
              {lang === "en" ? "zzeling@gmail.com" : "zzeling@gmail.com"}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              {lang === "en" ? "Hours" : "营业时间"}
            </h4>

            <p className="text-gray-400">
              Mon - Thu: 11AM - 10PM
            </p>

            <p className="text-gray-400">
              Fri - Sun: 11AM - 12PM
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              {lang === "en" ? "Location" : "门店地址"}
            </h4>

            <p className="text-gray-400">
              15435 Jerffery Rd #103, Irvine, CA 92618
            </p>

            <p className="text-gray-400">
              {lang === "en" ? "Authentic Hunan Cuisine Experience" : "地道湖南菜用餐体验"}
            </p>
          </div>

        </div>
        <section className="mb-16">
          <h2 className="mb-8 text-center text-4xl font-bold">
            {lang === "en" ? "Visit Us" : "欢迎到店"}
          </h2>

          <div className="overflow-hidden rounded-3xl border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.0975493131064!2d-117.77926360000001!3d33.680538199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd0665747287%3A0x6176ad8e39719fdd!2sLong&#39;s%20Kitchen!5e0!3m2!1sen!2sus!4v1779315608900!5m2!1sen!2sus"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </section>
        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-gray-500">

          <p className="mb-4 text-gray-400">
            {lang === "en"
              ? "Bold Hunan Flavor. Modern Chinese Dining."
              : "香辣湘味，现代中餐体验。"}
          </p>

          © 2026 Long&apos;s Kitchen. All rights reserved.
        </div>

      </section>
    </main>
  );
}