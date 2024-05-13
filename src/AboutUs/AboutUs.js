import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";

const AboutUs = () => {
    // const location=useLocation()
    // console.log(location)

    const {
        getValues,
        setValue,
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()
    const onsubmitForm = (data) => {
        console.log("data", data)
    }
    console.log(watch('login'))


    return <div>

        <div>React Hook Form</div>36
        <div>
            <form onSubmit={handleSubmit(onsubmitForm)}>
                <label>
                    <p>Login</p>
                    <input type="text" {...register("login")}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" {...register("password", {required: "password is required", minLength: 5})}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </label><br/>
                <button type={"submit"}>Save</button>
            </form>
        </div>

    </div>
}
export default AboutUs