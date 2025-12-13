'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_58';
import Product_58 from '../../_components/Product_58';

import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_58 = () => {
  const [shop_58, setShop_58] = useState([]);
  const params = useParams();
  const category = params.category;
  // console.log('category', category);

  const fetchShopFromSupabase = async () => {
    try {
      let { data, error } = await supabase
        .from('category2_58')
        .select('*, shop2_58(*)')
        .eq('cname', category);
      console.log('data', data[0].shop2_58);
      if (data.length !== 0) {
        setShop_58(data[0].shop2_58);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShopFromSupabase();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center text-[16px]'> clw,213410458 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_58?.map((item) => {
              const { pid, pname, price, img_url } = item;
              return (
                <Product_58
                  key={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_58;
