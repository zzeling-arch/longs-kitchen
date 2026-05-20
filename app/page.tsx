export default function Home() {/*  */
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
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="mb-4 text-6xl font-bold text-red-500 md:text-8xl">
            湘味馆
          </h1>

          <h2 className="mb-6 text-4xl tracking-wide md:text-5xl">
            Long&apos;s Kitchen
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            Bold Hunan Flavor. Modern Chinese Dining.
          </p>

          <div className="flex justify-center gap-4 rounded-full bg-black/20 px-6 py-4 backdrop-blur-sm">
            <a
              href="/menu"
              className="rounded-full bg-red-600 px-6 py-3 hover:bg-red-700"
            >
              View Menu
            </a>

            <a
              href="/order"
              className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
      <section className="bg-black px-8 py-24 text-white">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Signature Dishes
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
                小炒黄牛肉
              </h3>

              <p className="text-gray-400">
                Wok-fired sliced beef with fresh chili peppers and signature Hunan spice.
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
                Steamed fish head topped with vibrant chopped chili sauce.
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
                Slow-braised pork belly glazed in rich soy caramel sauce.
              </p>
            </div>
          </div>

        </div>

      </section>
      <section className="bg-neutral-950 px-8 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
              Our Story
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Authentic Hunan Flavor, Reimagined for Today.
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-300">
              At Long&apos;s Kitchen, we bring the bold spirit of Hunan cuisine to a
              modern dining experience — balancing smoky wok aroma, fresh chili heat,
              and comforting traditional recipes.
            </p>

            <p className="text-gray-400">
              From wok-fired beef to chopped chili fish head, every dish is crafted
              with intensity, freshness, and the unmistakable flavor of 湘味.
            </p>
          </div>

          <div className="rounded-3xl border border-red-500/30 bg-black p-8">
            <div className="grid gap-6">
              <div>
                <h3 className="text-2xl font-bold text-red-500">01</h3>
                <p className="text-gray-300">Fresh chili and bold aromatics</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-500">02</h3>
                <p className="text-gray-300">Wok-fired flavor with real heat</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-500">03</h3>
                <p className="text-gray-300">Modern Chinese dining experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black px-8 py-24 text-white">

        <h2 className="mb-16 text-center text-5xl font-bold">
          What Our Guests Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              “Probably the best Hunan food I’ve had in Los Angeles.”
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Google Review
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              “Authentic spice, amazing wok flavor, and beautiful atmosphere.”
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Yelp Review
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-900 p-8">
            <p className="mb-6 text-gray-300">
              “The chopped chili fish head was incredible.”
            </p>

            <h3 className="font-bold text-red-500">
              ★★★★★
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Customer Review
            </p>
          </div>

        </div>

      </section>
      <section className="border-t border-neutral-800 bg-black px-8 py-16 text-white">

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-2xl font-bold text-red-500">
              湘味馆
            </h3>

            <p className="text-gray-400">
              Authentic Hunan Cuisine. Bold Spice. Wok-Fired Flavor.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Contact
            </h4>

            <p className="text-gray-400">
              (949) 379-6188
            </p>

            <p className="text-gray-400">
              zzeling@gmail.com
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">
              Hours
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
              Location
            </h4>

            <p className="text-gray-400">
              15435 Jerffery Rd #103, Irvine, CA 92618
            </p>

            <p className="text-gray-400">
              Authentic 湘菜 Experience
            </p>
          </div>

        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-gray-500">
          © 2026 Long&apos;s Kitchen. All rights reserved.
        </div>

      </section>
    </main>
  );
}