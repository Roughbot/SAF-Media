import "./styles.scss";
import Form from "@/components/contactForm/page";

const Contact = () => {
  return (
    <section>
      <div className="bg-slate-600">
        <div className="pt-24 pb-10 px-7 sm:p-20 sm:py-24 sm:min-h-screen flex flex-col">
          <div className="shadow-md p-8 sm:p-8 bg-slate-300 rounded-3xl">
            <div className="pt-4 ">
              <h1 className="font-bold text-3xl  sm:text-6xl">
                Let&apos;s get <span className="text-blue-600">started!</span>
              </h1>

              <p className="font-normal text-xs sm:text-base pt-6">
                Both big and small, any kind of business category.Send us a
                message to find out the power that we can do to make your
                business even more successful.
              </p>
            </div>
            <div className="flex flex-col contact sm:justify-between  justify-center items-center sm:flex-row py-10 ">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
