import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const allLetters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

function Coupon() {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeChars, setIncludeChars] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeNumbers && !includeChars && !includeSymbol) {
      return alert("Please select one at least")
    }
    let result: string = prefix || "";
    const loopLen: number = size - result.length;
    for (let i = 0; i < loopLen; i++) {
      let entireStr: string = "";
      if (includeChars) entireStr += allLetters;
      if (includeNumbers) entireStr += allNumbers;
      if (includeSymbol) entireStr += allSymbols;
      const randomNum: number = ~~(Math.random() * entireStr.length);
      result += entireStr[randomNum];
    }
    setCoupon(result);
  };
  useEffect(()=>{
    setIsCopied(false);
  },[coupon])
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="appContainer">
        <h1>Coupon</h1>
        <section>
          <form onSubmit={submitHandler} className="couponForm">
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />

            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(+e.target.value)}
              min={8}
              max={25}
            />
            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
              />
              <span>Numbers</span>

              <input
                type="checkbox"
                checked={includeChars}
                onChange={() => setIncludeChars((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbol}
                onChange={() => setIncludeSymbol((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
}

export default Coupon;
