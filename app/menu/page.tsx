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

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-red-500">湘味馆</h1>
          <p className="text-2xl text-white">Long&apos;s Kitchen Menu</p>
          <p className="mt-4 text-sm text-neutral-400">
            * Mild spicy &nbsp; ** Medium spicy &nbsp; V Vegetarian
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {menuSections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
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
                      <p className="text-sm text-neutral-400">{chinese}</p>
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