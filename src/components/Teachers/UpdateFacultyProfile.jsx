import React, { useState } from "react";
import FacultyNavbar from "./FacultyNavbar";

let UpdateFacultyProfile = () => {
  const [formData, setFormData] = useState({
    image: "",
    address: "",
    branch: "",
    subject: "",
    designation: "",
    password: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
    <FacultyNavbar title="update Profile"></FacultyNavbar>
      <section className=" h-200 border-solid items-center justify-center flex gap-6 p-4">
        {/* LEFT SIDE: Profile Card */}
        <div className="flex items-center w-[22rem] h-120 justify-center rounded-2xl bg-white drop-shadow-2xl">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm">
            {/* Profile Image Section */}
            <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">
                  <img
                    src={formData.image || "./student profile.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name Section */}
            <div className="text-center mt-16 px-4">
              <h2 className="text-xl font-bold text-gray-800 uppercase">
                PREM KUMAR
              </h2>
              <hr className="my-4 border-gray-300 w-80 mx-auto" />
            </div>

            {/* Course Details Section */}
            <div className="  flex flex-col   text-gray-700 text-sm">
                            <p className="mb-1">
                <span className="font-semibold">Subject:</span>{" "}
                {formData.subject || "Compiler Design"}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Designation:</span>{" "}
                {formData.designation || "Faculty"}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Roll:</span> 200XXXX
              </p>
              <hr className="my-4 border-gray-300 w-80 mx-auto" />
            </div>

            {/* Contact Details Section */}
            <div className="px-4 py-2 text-gray-700 text-sm">
              <p className="mb-1">
                <span className="font-semibold">Phone: <br /></span> +91 XXXXXXXXXX
              </p>
              <p className="mb-1">
                <span className="font-semibold">Email: <br /></span> XXXXXXXXXXXXXX
              </p>
              <hr className="my-4 border-gray-300 w-80 mx-auto" />
            </div>

            {/* Address Section */}
            <div className="px-4 py-2 text-gray-700 text-sm">
              <p className="mb-1 font-semibold">Address:</p>
              <p className="pl-4">{formData.address || "Village, Block, Lakhisarai"}</p>
              <p className="pl-4">Bihar 811315</p>
              <hr className="my-4 border-gray-300 w-80 mx-auto" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <main className=" w-[30rem] h-120  rounded-2xl  drop-shadow-2xl  bg-white p-6">
          <form
            className="flex flex-col justify-center items-center gap-3"
            onSubmit={handleSubmit}
          >
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-white border-4 border-white overflow-hidden">
              <img
                src={formData.image || "./student profile.png"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <input
              type="text"
              name="address"
              placeholder="   Enter Address"
              value={formData.address}
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <input
              type="text"
              name="branch"
              placeholder="   Enter Branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <input
              type="text"
              name="subject"
              placeholder="   Enter Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <input
              type="text"
              name="designation"
              placeholder="   Enter Designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="   Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 bg-blue-100 px-4 py-2 h-10 rounded-lg"
            />

            <button
              type="submit"
              className="bg-yellow-400 w-50 h-10 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500" >
              Update
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default UpdateFacultyProfile;
