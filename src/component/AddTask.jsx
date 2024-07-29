import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const AddTask = ({ addTask }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      description: Yup.string().max(200, "Must be 200 characters or less"),
    }),
    onSubmit: (values) => {
      addTask({ id: Date.now(), ...values });
      formik.resetForm();
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-red-500 text-sm">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500 text-sm">
            {formik.errors.description}
          </div>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
