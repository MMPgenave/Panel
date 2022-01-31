import React from "react";
import { links } from "data.js";
import styled from "styled-components";
import { useState } from "react";
function Sidebar() {
    const [id, setId] = useState(1);
    return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
          <h3>نام سازمان</h3>
          <h4>توضیحات مختصر در چند کلمه</h4>
        </div>

        <div className="item-container">
                    {links.map(item => { 
                        let Color = "#b2b2b2";
                        if (item.id === 1) { 
                            Color = "#2C2C30" ;
                        }
                      return (
                          <div className="item " style={{color:Color}} key={item.id}>
                              <p className="icon">{item.icon}</p>
                              <p>{item.text}</p>
                          </div>
                      )
                  })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`
  .container {
    position: relative;
  }
  .logo {
    position: absolute;
    width: 15rem;
    height: 12rem;
    right: 1rem;
    top: 2rem;
    background: linear-gradient(
      209.22deg,
      #fd3d39 8.18%,
      rgba(253, 61, 57, 0.7) 92.37%
    );
    border-radius: 2rem;
  }
  .logo h1 {
    /* position: absolute; */
    width: 4rem;
    height: 2rem;
    right: 50%;
    /* left: 50%;
    top: 1rem; */
    margin: auto;
    margin-top: 2rem;
    font-family: Vazir FD;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    /* line-height: 5rem; */
    text-align: center;

    color: #ffffff;
  }
  .logo h3 {
    /* position: absolute; */
    width: 5rem;
    height: 1rem;
    /* right: 50%; */
    /* left: 50%;
    top: 1rem; */
    margin: auto;
    margin-top: 1.2rem;

    font-family: Kalameh;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1rem;
    line-height: 1rem;
    text-align: center;

    color: #ffffff;
  }
  .logo h4 {
    width: 100%;
    height: 1rem;
    /* right: 50%; */
    /* left: 50%;
    top: 1rem; */
    margin: auto;
    margin-top: 1.2rem;

    font-family: Kalameh;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1rem;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
  .item-container {
    position: absolute;
    right: 3rem;
    top: 15rem;
    display: flex;
    flex-direction: column;
    /* White */

    background: #ffffff;
    border-radius: 30px 30px 0px 0px;
  }

  .item {
    display: flex;
    align-items: center;
    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: .8rem;
    /* line-height: 1.7rem; */
    text-align: right;
    letter-spacing: 0.1rem;
padding:.3rem;
    /* Black II */

    color: #b2b2b2;
  }
  .icon {
    margin-left: 1rem;
    font-size: 1.2rem;
    padding:.1rem;
  }
`;
