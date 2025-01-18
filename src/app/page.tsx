import Container from "@/components/Container";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MessageCard from "@/components/MessageCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="lg:h-screen mt-48 md:mt-30 lg:mt-0 flex items-center justify-center flex-col gap-5 text-center">
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-light text-center">
            Ruang hening tempat aksara ber
            <span className="font-bold">bisik</span>
          </h1>

          <div className="flex flex-col md:text-xl 2xl:text-2xl font-light">
            <p>
              Ditempat ini, kamu bebas mengekspresikan diri tanpa terusik, tanpa
              terpikirkan, tanpa terpengaruh.
            </p>
            <p>Sampaikan pesanmu, yang tak pernah tersampaikan itu.</p>
          </div>

          <div className="flex gap-3">
            <Button>Tulis pesanmu</Button>
            <Button className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300">
              Pesan orang lain
            </Button>
          </div>

          <div className="flex flex-wrap lg:flex-row justify-center mt-6 gap-5">
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
          <Button variant={"outline"} className="mt-3">
            Lihat Pesan Lainnya
          </Button>
        </div>
        <Footer />
      </Container>
    </>
  );
}
