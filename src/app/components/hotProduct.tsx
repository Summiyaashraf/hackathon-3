import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="writing-mode-vertical text-xl font-medium tracking-wider text-zinc-900 md:block pt-6">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[48%]">
            <Image
              src="/item-category 1.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/Image (3).png"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/card (1).png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/02.png"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/card (1).png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
