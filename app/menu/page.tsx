const menuSections = [
  {
    title: "Appetizer",
    chinese: "前菜",
    items: [
      ["Cucumber Salad", "酱拌小黄瓜", "$7.99"],
      ["Crispy Peanuts", "香脆花生米", "$7.99"],
      ["Green Onion Tofu Salad", "小葱拌豆腐", "$10.99"],
      ["Hunan Stinky Tofu", "湖南黑金臭豆腐", "$11.99"],
      ["Preserved Eggs w/ Chili Pepper", "烧辣椒皮蛋", "$12.99"],
      ["Braised Pork Ear", "卤猪耳", "$11.99"],
      ["Spicy Cold Skin Noodles", "绝味凉皮", "$9.99"],
      ["Scallion Oil Chicken", "葱油鸡", "$14.99 / $29.99"],
      ["Hand-Shredded Chicken", "卤撕鸡", "$24.99"],
    ],
  },
  {
    title: "Soup",
    chinese: "汤类",
    items: [
      ["Lotus Root Soup", "莲藕骨头汤", "$15.99"],
      ["Seaweed Soup Tube", "海带骨头汤", "$15.99"],
      ["Tomato and Egg Soup", "西红柿鸡蛋汤", "$14.99"],
      ["Bean Curd w/ Vegetable Soup", "青菜豆腐汤", "$14.99"],
    ],
  },
  {
    title: "Stir Fry",
    chinese: "炒菜",
    items: [
      ["Sliced Pork w/ Green Pepper", "农家小炒肉", "$15.99"],
      ["Sliced Pork add Scrambled Eggs w/ Green Pepper", "农家小炒肉加蛋", "$19.99"],
      ["Shredded Beef w/ Green Pepper", "小炒黄牛肉", "$19.99"],
      ["Stir-fried Beef w/ Green Pepper", "野山椒黄牛肉", "$23.99"],
      ["Stir-fried Beef w/ Celery", "芹菜炒牛肉", "$23.99"],
      ["Spicy Beef Tongue", "香辣牛舌", "$29.99"],
      ["Golden Egg", "金钱蛋", "$18.99"],
      ["Hunan Style Braised Pork", "湘味红烧肉", "$19.99"],
      ["Twice-cooked Pork w/ Garlic Sprouts", "蒜苗回锅肉", "$16.99"],
      ["Mapo Tofu w/ Minced Pork", "麻婆豆腐", "$14.99"],
      ["Double Pepper Fish Head", "霸王双椒鱼头", "$39.99"],
    ],
  },
  {
    title: "Vegetable",
    chinese: "蔬菜",
    items: [
      ["Fried Shredded Cabbage", "手撕包菜", "$14.99"],
      ["Stir-fried Shredded Potatoes", "酸辣/清炒土豆丝", "$14.99"],
      ["Baby Bok Choy w/ Fresh Garlic", "蒜蓉上海青", "$14.99"],
      ["Scrambled Eggs w/ Tomato", "番茄炒蛋", "$15.99"],
      ["Cauliflower w/ Slice Pork Dry Pot", "干锅花菜", "$16.99"],
      ["Dry Pot Cabbage", "干锅包菜", "$16.99"],
      ["Dry Fried String Beans", "干煸四季豆", "$15.99"],
      ["Eggplant in Clay Pot", "鱼香茄子煲", "$16.99"],
    ],
  },
  {
    title: "Special Flavors",
    chinese: "特色风味",
    items: [
      ["Hunan Style Fried Abalone w/ Pork", "湘味鲍鱼炒肉", "$29.99"],
      ["Pork Stomach Chicken Soup", "猪肚鸡汤", "M $39.99 / L $69.99"],
      ["Turtle and Chicken Stew", "霸王别姬", "$119.99"],
      ["Hunan Blood Duck", "正宗血酱鸭", "$109.99"],
      ["Crispy Roast Duck", "脆皮烧鸭", "Half $29.99 / $59.99"],
    ],
  },
  {
    title: "Fried Rice",
    chinese: "炒饭",
    items: [
      ["Hunan Taste Fried Rice", "湘味农家炒饭", "$13.99"],
      ["Fried Rice Yangchou Style", "扬州炒饭", "$15.99"],
      ["Soy Sauce Fried Rice", "酱油炒饭", "$13.99"],
      ["Beef Fried Rice", "牛肉炒饭", "$15.99"],
      ["Shrimp Fried Rice", "虾炒饭", "$15.99"],
    ],
  },
  {
    title: "Dessert",
    chinese: "甜点",
    items: [
      ["Sweet Rice Dumplings in Egg Flower Soup", "蛋花汤圆", "$15.99"],
      ["Home Made Glutinous Rice Cake", "手工糍粑", "$12.99"],
      ["Crispy Sesame Balls", "香脆芝麻球", "$12.99"],
    ],
  },
  {
    title: "Beverage",
    chinese: "饮料",
    items: [
      ["Coke", "可乐", "$2.99"],
      ["Diet Coke", "无糖可乐", "$2.99"],
      ["Sprite", "雪碧", "$2.99"],
      ["Mung Bean Juice", "绿豆汁", "$3.99"],
      ["Iced Green Tea", "冰绿茶", "$3.50"],
      ["Iced Black Tea", "冰红茶", "$3.50"],
      ["Beer", "啤酒", "$4.99"],
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="mb-10 inline-block text-neutral-400 hover:text-white">
          ← Back to Home
        </a>

        <div className="mb-16 rounded-3xl border border-neutral-800 bg-neutral-950 px-6 py-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
            Long&apos;s Kitchen
          </p>

          <h1 className="mb-4 text-5xl font-bold text-red-500">
            湘味馆 Menu
          </h1>

          <p className="mx-auto max-w-2xl text-neutral-400">
            Authentic Hunan cuisine crafted with bold spice, wok-fired flavor,
            and traditional 湘菜 spirit.
          </p>

          <p className="mt-6 text-sm text-neutral-500">
            * Mild spicy &nbsp; ** Medium spicy &nbsp; V Vegetarian
          </p>
        

        </div><div className="mb-16 grid gap-6 md:grid-cols-3">

          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition hover:border-red-500">
            <img
              src="/dish1.jpg"
              alt="农家小炒肉"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">农家小炒肉</h3>

                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  Chef Special
                </span>
              </div>

              <p className="text-sm text-neutral-400">
                湖南经典农家风味，锅气十足，香辣下饭。
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition hover:border-red-500">
            <img
              src="/dish2.jpg"
              alt="霸王别姬"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">霸王别姬</h3>

                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  Signature
                </span>
              </div>

              <p className="text-sm text-neutral-400">
                湘味馆招牌特色菜，香辣浓郁，层次丰富。
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition hover:border-red-500">
            <img
              src="/dish3.jpg"
              alt="霸王双椒鱼头"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold">霸王双椒鱼头</h3>

                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  Best Seller
                </span>
              </div>

              <p className="text-sm text-neutral-400">
                双椒搭配鲜嫩鱼头，香辣过瘾，地道湖南风味。
              </p>
            </div>
          </div>

        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {menuSections.map((section) => (
            <a
              key={section.title}
              href={`#${section.title}`}
              className="rounded-full border border-neutral-700 px-5 py-2 text-sm text-neutral-300 transition hover:border-red-500 hover:text-red-500"
            >
              {section.chinese} {section.title}
            </a>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {menuSections.map((section) => (
            <section
              key={section.title}
              id={section.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 transition duration-300 hover:border-red-500 hover:bg-neutral-900"
            >
              <h2 className="mb-6 text-3xl font-bold text-red-500">
                {section.chinese} {section.title}
              </h2>

              <div className="space-y-4">
                {section.items.map(([name, chinese, price]) => (
                  <div
                    key={name}
                    className="flex items-start justify-between gap-6 border-b border-neutral-800 pb-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-neutral-400">{chinese}</p>

                        {["Stir Fry", "Special Flavors"].includes(section.title) && (
                          <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-400">
                            🌶 Spicy
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="shrink-0 font-bold text-red-500">{price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}