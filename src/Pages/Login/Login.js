import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Container } from "react-bootstrap";

const Login = () => {
    // form validation rules
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        firstName: Yup.string()
            .min(2, "First Name must be at least 2 number")
            .required("First Name is required"),
        lastName: Yup.string()
            .min(2, "Last Name must be at least 2 number")
            .required("Last name is required"),
        dob: Yup.string()
            .required("Date of Birth is required")
            .matches(
                /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                "Date of Birth must be a valid date in the format YYYY-MM-DD"
            ),
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        contact: Yup.string()
            .min(10, "contact must be at least 10 number")
            .required("contact is required"),
        address: Yup.string()
            // .oneOf([Yup.ref('contact'), null], 'contacts must match')
            .required("Address is required"),
        acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        // return false;
        console.log(data);
    }
    return (
        <div className="my-5">
            <Container>
                <div className="card m-3 w-75 mx-auto">
                    <h2 className="card-header text-center py-4">Register</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label>Title</label>
                                    <select
                                        name="title"
                                        {...register("title")}
                                        className={`form-control ${
                                            errors.title ? "is-invalid" : ""
                                        }`}
                                    >
                                        <option value=""></option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Ms">Ms</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        {errors.title?.message}
                                    </div>
                                </div>
                                <div className="form-group col-5">
                                    <label>First Name</label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        {...register("firstName")}
                                        className={`form-control ${
                                            errors.firstName ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.firstName?.message}
                                    </div>
                                </div>
                                <div className="form-group col-5">
                                    <label>Last Name</label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        {...register("lastName")}
                                        className={`form-control ${
                                            errors.lastName ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.lastName?.message}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label>Date of Birth</label>
                                    <input
                                        name="dob"
                                        type="date"
                                        {...register("dob")}
                                        className={`form-control ${
                                            errors.dob ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.dob?.message}
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        {...register("email")}
                                        className={`form-control ${
                                            errors.email ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.email?.message}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label>Contact Number</label>
                                    <input
                                        name="contact"
                                        type="number"
                                        {...register("contact")}
                                        className={`form-control ${
                                            errors.contact ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.contact?.message}
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <label>Address</label>
                                    <input
                                        name="address"
                                        type="text"
                                        {...register("address")}
                                        className={`form-control ${
                                            errors.address ? "is-invalid" : ""
                                        }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.address?.message}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input
                                    name="acceptTerms"
                                    type="checkbox"
                                    {...register("acceptTerms")}
                                    id="acceptTerms"
                                    className={`form-check-input ${
                                        errors.acceptTerms ? "is-invalid" : ""
                                    }`}
                                />
                                <label
                                    htmlFor="acceptTerms"
                                    className="form-check-label"
                                >
                                    Accept Terms & Conditions
                                </label>
                                <div className="invalid-feedback">
                                    {errors.acceptTerms?.message}
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-1"
                                >
                                    Register
                                </button>
                                <button
                                    type="button"
                                    onClick={() => reset()}
                                    className="btn btn-secondary"
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;