import Image from "next/image";
import { assets, categories } from "../../public/assets";

export default function Categories() {
  return (
    <section className="mt-16">
      <h4 className="text-2xl md:text-3xl font-medium">Categories</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
            style={{ backgroundColor: category.bgColor }}
          >
            <Image
              src={category.image}
              className="group-hover:scale-125 transition max-w-28"
              alt="This is shows categories of the products sold"
            />
            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
