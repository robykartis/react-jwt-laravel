import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

function Register() {
  const navigate = useNavigate();
  const { http, setToken } = AuthUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http
      .post("/register", { email: email, password: password, name: name })
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    <div>
      <div className="row justify-content-center  form-signin w-100 m-auto">
        <div className="col-xl-6 col-lg-12 mt-5">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control form-control-user mb-4"
                          aria-describedby="emailHelp"
                          placeholder="EnterName..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control form-control-user mb-4"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={submitForm}
                        className="btn btn-primary mt-4"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
