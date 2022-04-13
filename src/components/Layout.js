/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import slides from "../img/slides.png";
import icon4 from "../img/icon_4.png";
import icon5 from "../img/icon_5.png";
import icon6 from "../img/icon_6.png";
import langkah from "../img/langkah.png";
import logo from "../img/logo.png";

const Layout = () => {
  return (
    <>
      <div className="container px-6 max-w-md mx-auto font-inter sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:px-0">
        <div className="lg:p-12 lg:flex-1">
          <img src={logo} alt="laptop" className="object-cover" />

          <img
            className="rounded-xl mt-4 shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="laptop2.jpeg"
            alt="laptop"
          />
          <h2 className="mt-6 text-2xl font-semibold text-slate-600 sm:mt-8 sm:text-4xl">Mari belajar programming with WPU</h2>
          <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus obcaecati possimus et dicta deleniti optio, eum ab culpa
            vero sapiente dolore consequatur natus ipsam ipsum.
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block px-5 py-3 bg-blue-700 rounded-lg shadow-lg text-white uppercase font-semibold tracking-wider text-sm sm:text-base"
            >
              kembali ke pilihkartu
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto font-inter">
        <div className="hidden lg:flex">
          <img src={slides} alt="laptop" className="object-cover" />
        </div>
      </div>
      <section className="font-inter max-w-3xl mx-auto">
        <h2 className="mb-4 ml-8 text-2xl font-bold">
          Keuntungan Mendaftar <span className="text-blue-600">Axa Life Indonesia</span> dipilihkartu
        </h2>
        <div className="benefit">
          <img src={icon4} alt="icon4" className="float-left mr-3" />
          <p className="mb-4">Pendaftar yang lolos verifikasi dari Tim AXA berhak mendapat perlindungan Asuransi Kecelakaan diri selama 3 Bulan</p>
          <img src={icon5} alt="icon5" className="float-left mr-3" />
          <p className="mb-4 mt-4">Tanpa ada masa tunggu. perlindungan yang di dapatkan dimulai sejak polis aktif</p>
          <img src={icon6} alt="icon5" className="float-left mr-3 mt-4" />
          <p className="mb-4 mt-6">
            Bukan Penawaran melainkan pemberian secara cuma cuma kepada nasabah terintegrasi via pilihkartu.com yang sudah memiliki kartu kredit
          </p>
        </div>
      </section>

      <section class="font-inter  bg-indigo-300">
        <div className="max-w-7xl  mx-auto">
          <h2 className="mb-4 ml-48 text-2xl font-bold" style={{ marginLeft: "400px" }}>
            Tentang <span className="text-blue-600">Axa Care Protection</span>
          </h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt ipsam labore nam rerum laudantium, ab sed iste molestias, recusandae
            pariatur illo expedita quo quis eaque magnam quos ut similique eius, vel doloribus quam sequi. Impedit perferendis nulla sapiente nihil
            soluta eaque odit dolores nostrum assumenda dolorem minima, fuga exercitationem!
          </p>
          <button className="my-5 ml-96 bg-blue-800 px-5 py-2 rounded-xl text-white font-semibold font-inter block mx-auto">
            DAFTAR SEKARANG JUGA !
          </button>
        </div>
      </section>

      <section class="font-inter max-w-3xl mx-auto">
        <h2 className="mb-4 ml-8 text-2xl font-bold">
          Dapatkan perlindungan <span className="text-blue-600">Axa Care Protection</span> sekarang
        </h2>
        <p class="mb-4 ml-32">Cukup isi data diri anda pada form dibawah ini</p>

        <div class="max-w-lg mx-auto font-inter p-5">
          <label for="vehicle1" className="pr-3">
            {" "}
            Nama Lengkap :
          </label>
          <input
            type="text"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div class="max-w-lg mx-auto font-inter p-5">
          <label for="vehicle1" className="pr-3">
            {" "}
            Tanggal lahir :
          </label>
          <input
            type="date"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div class="max-w-lg mx-auto font-inter p-5">
          <label for="vehicle1" className="pr-3">
            {" "}
            Email :
          </label>
          <input
            type="email"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div class="max-w-lg mx-auto font-inter p-5">
          <label for="vehicle1" className="pr-3">
            {" "}
            Nomor Ponsel :
          </label>
          <input
            type="number"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div class="max-w-lg mx-auto font-inter p-5">
          <label for="vehicle1" className="pr-3">
            {" "}
            Memilik kartu kredit :
          </label>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <label for="vehicle1"> VISA</label>
          <br></br>
        </div>

        <span style={{ marginLeft: "350px" }}>syarat dan ketentuan berlaku</span>

        <div class="max-w-lg mx-auto font-inter p-5">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value=""
            placeholder
            className=" px-10 py-2 border shadow  placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <label for="vehicle1"> Saya mengetahui dan menyetujui syarat</label>
          <br></br>
        </div>

        <button className="my-5 ml-96 bg-blue-800 px-5 py-2 rounded-xl text-white font-semibold font-inter block mx-auto">KIRIM !</button>
      </section>

      <section class="font-inter max-w-3xl mx-auto">
        <h2 className="mb-4 ml-8 text-2xl font-bold">
          4 langkah mudah <span className="text-blue-600">Axa Life Indonesia</span> dipilihkartu
        </h2>
        <div className="container max-w-7xl mx-auto font-inter">
          <div className="hidden lg:flex">
            <img src={langkah} alt="laptop" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mb-10 bg-blue-700">
        <h2 className="text-3xl text-center">copyright 2022</h2>
      </section>
    </>
  );
};

export default Layout;
