(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32948,e=>{"use strict";var t=e.i(97053);let i=t.default.div.withConfig({displayName:"Shop_58__Wrapper",componentId:"sc-505fdfbd-0"})`
  .midterm {
    width: 95%;
    margin: 1rem auto;
  }
  .header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      display: flex;
      height: 100%;
      width: 50%;
      justify-content: flex-end;
      align-items: center;

      .option {
        padding: 10px 15px;
        cursor: pointer;
      }

      .cart-icon {
        width: 45px;
        height: 45px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .shopping-icon {
          width: 24px;
          height: 24px;
        }
      }

      .cart-dropdown {
        position: absolute;
        width: 240px;
        height: 340px;
        display: none;
        background-color: white;
        border: 1px solid black;
        top: 90px;
        right: 40px;
        padding: 20px;
        z-index: 5;

        &.show {
          display: block;
        }

        .cart-items {
          height: 240px;
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }

        .cart-item {
          width: 100%;
          display: flex;
          height: 80px;
          margin-bottom: 10px;

          img {
            width: 30%;
          }

          .item-details {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 10px 20px;

            .name {
              font-size: 16px;
              margin-bottom: 10px;
            }

            .price {
              font-size: 18px;
            }
          }
        }

        .custom-button {
          width: 100%;
          height: 40px;
          background-color: #000;
          color: white;
          padding: 20px auto;
          margin: 20px auto;

          &:hover {
            background-color: lightgrey;
            color: black;
          }
        }
      }
    }
  }

  .section-title {
    h2 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    h4 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  // Homepage
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;

    .directory-menu {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .menu-item {
        width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 7px;
        overflow: hidden;

        &:hover {
          cursor: pointer;

          & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
          }

          & .content {
            opacity: 0.9;
          }
        }

        &.large {
          height: 320px;
        }

        &:first-child {
          margin-right: 7.5px;
        }

        &.last-child {
          margin-left: 7.5px;
        }

        .background-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        & img {
          object-fit: cover;
          width: 100%;
          height: 240px;
        }

        .content {
          height: 90px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          background-color: white;
          opacity: 0.5;
          position: absolute;

          .title {
            font-weight: bold;
            font-size: 20px;
            color: #4a4a4a;
          }

          .subtitle {
            font-weight: lighter;
            font-size: 14px;
          }
        }
      }
    }
  }

  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 15px auto;
    }

    .items {
      // display: flex;
      // justify-content: flex-start;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }

  .collection-item {
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 260px;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;

    .image {
      width: 100%;
      height: 240px;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }

    .custom-button {
      width: 80%;
      position: absolute;
      top: 100px;
      display: none;
      opacity: 0.7;
      padding: 10px 10px;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        background-color: #000;
        color: white;
      }
    }

    &:hover {
      .image {
        opacity: 0.8;
      }

      .custom-button {
        opacity: 0.85;
        display: block;
      }
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .shop-page {
    width: 90%;
    margin: 2rem auto;
  }
  // Overview & Preview
  .collection-overview {
    display: flex;
    flex-direction: column;
  }

  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      margin-bottom: 25px;
    }

    .preview {
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
`;e.s(["default",0,i])},67458,(e,t,i)=>{"use strict";var o=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;i.c=function(e){return o.H.useMemoCache(e)}},932,(e,t,i)=>{"use strict";t.exports=e.r(67458)},18566,(e,t,i)=>{t.exports=e.r(76562)},58531,e=>{"use strict";var t=e.i(43476),i=e.i(932);e.i(32948),e.s(["default",0,e=>{let o,n,a,r,l,c,s=(0,i.c)(13),{pname:p,price:d,img_url:m}=e;return s[0]!==m?(o=(0,t.jsx)("img",{className:"image",src:m}),s[0]=m,s[1]=o):o=s[1],s[2]!==p?(n=(0,t.jsx)("span",{className:"name",children:p}),s[2]=p,s[3]=n):n=s[3],s[4]!==d?(a=(0,t.jsx)("span",{className:"price",children:d}),s[4]=d,s[5]=a):a=s[5],s[6]!==n||s[7]!==a?(r=(0,t.jsxs)("div",{className:"collection-footer",children:[n,a]}),s[6]=n,s[7]=a,s[8]=r):r=s[8],s[9]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)("button",{className:"custom-button",children:"Add to Cart"}),s[9]=l):l=s[9],s[10]!==o||s[11]!==r?(c=(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"collection-item",children:[o,r,l]})}),s[10]=o,s[11]=r,s[12]=c):c=s[12],c}])},94625,e=>{"use strict";var t=e.i(43476),i=e.i(932),o=e.i(71645),n=e.i(18566),a=e.i(32948),r=e.i(58531);function l(e){let{pid:i,pname:o,price:n,img_url:a}=e;return(0,t.jsx)(r.default,{img_url:a,pname:o,price:n},i)}e.s(["default",0,()=>{let e,r,c,s,p,d,m,h,x,g=(0,i.c)(16);g[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],g[0]=e):e=g[0];let[f,u]=(0,o.useState)(e),b=(0,n.useParams)().category;console.log("category",b),g[1]!==b?(r=async()=>{try{let e=await fetch(`http://localhost:5000/api/shop_58/${b}`),t=await e.json();console.log("shop_58 data",t),0!==t.length&&u(t)}catch(e){console.log(err)}},g[1]=b,g[2]=r):r=g[2];let w=r;return g[3]!==w?(c=()=>{w()},g[3]=w,g[4]=c):c=g[4],g[5]===Symbol.for("react.memo_cache_sentinel")?(s=[],g[5]=s):s=g[5],(0,o.useEffect)(c,s),g[6]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("div",{className:"section-title",children:(0,t.jsx)("h4",{className:"text-center text-[16px]",children:" clw,213410458 "})}),g[6]=p):p=g[6],g[7]!==b?(d=(0,t.jsx)("h1",{className:"title",children:b}),g[7]=b,g[8]=d):d=g[8],g[9]!==f?(m=f?.map(l),g[9]=f,g[10]=m):m=g[10],g[11]!==m?(h=(0,t.jsx)("div",{className:"items",children:m}),g[11]=m,g[12]=h):h=g[12],g[13]!==d||g[14]!==h?(x=(0,t.jsx)(a.default,{children:(0,t.jsxs)("div",{className:"shop-page",children:[p,(0,t.jsxs)("div",{className:"collection-page",children:[d,h]})]})}),g[13]=d,g[14]=h,g[15]=x):x=g[15],x}])}]);