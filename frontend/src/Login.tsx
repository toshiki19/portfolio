import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <>
//       <h1 className="ml-3 text-xl">ログインページ</h1>
//       <div>
//         <Link to={`/home`}>ホームサイト</Link>
//       </div>
//     </>
//   );
// };

// export default Login;
import { useEffect, useState } from "react";
import "./Login.css";

function Login() {

    return (
        <div className="login">
            <div className="formContainer">
                <form>
                    <h1>ログインフォーム</h1>
                    <hr />
                    <div className="uiForm">
                        <div className="formField">
                            <label>ユーザー名</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="ユーザー名"
                            />
                        </div>
                        <p className="errorMsg"></p>
                        <div className="formField">
                            <label>メールアドレス</label>
                            <input
                                type="text"
                                name="mailAddress"
                                placeholder="メールアドレス"
                            />
                        </div>
                        <p className="errorMsg"></p>

                        <div className="formField">
                            <label>パスワード</label>
                            <input
                                type="text"
                                name="password"
                                placeholder="パスワード"
                            />
                        </div>
                        <p className="errorMsg"></p>
                        <Link to={`/home/`}>
                            <button className="submitButton">登録</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;