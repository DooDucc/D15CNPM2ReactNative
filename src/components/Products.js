import React from 'react';
import { View } from 'react-native';
import HomeCss from '../screens/home/HomeCss';
import ProCard from './proCard/ProCard';

const Products = ({ products }) => {
    return (
        <View style={HomeCss.products}>
            <View style={HomeCss.productList}>
                {products?.map((data) => {
                    return <ProCard key={data.id} data={data} />;
                })}
            </View>
        </View>
    );
};

export default Products;
