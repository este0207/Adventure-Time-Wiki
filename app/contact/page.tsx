import Form from "../components/form"
import Map from "../components/map";

export default function ContactPage() {
  return (
    <div className="container1 flex items-center justify-center flex-col">
      <h1 className="p-0 text-2xl text-white">Page de Contact</h1>
      {/* <p className="text-white">Pour nous contacter, veuillez envoyer un email à test@gmail.com</p> */}
        <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 */}
            <Form />
            <Map />
        </div>
    </div>
  );
}