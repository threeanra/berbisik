import Container from "@/components/Container";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="md:h-screen mt-52 md:mt-0 flex items-center justify-center flex-col gap-6 text-center">
          <h1 className="text-3xl md:text-6xl font-light text-center">
            Ruang hening tempat aksara ber
            <span className="font-bold">bisik</span>
          </h1>

          <div className="flex flex-col md:text-2xl font-light">
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
        </div>
        <Footer />
      </Container>
    </>
  );
}
