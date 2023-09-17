import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "ui/button"
import CatalogueCard from "ui/catalogue-card"
import Pagination from "ui/pagination"
import SearchInput from "ui/input/search"
import "assets/css/_main.page.scss";
import "assets/css/_pagination.scss";
import { useNavigate } from "react-router-dom";
import Constructor from "./constructor";
import Layout from "layouts/index"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setProducts } from "store/slices/product";
import { setPage } from "store/slices/product";

function Home() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({...Constructor.payload});
    const [list, setList] = useState([...Constructor.list]);
    const [meta, setMeta] = useState({...Constructor.meta});
    const product = useSelector((state: any) => state.product);
    const dispatch = useDispatch();

    const onUpdate = () => {
        setPayload({...Constructor.payload});
        setList([...Constructor.list]);
        setMeta({...Constructor.meta});
    }

    const getData = async () => {
        await Constructor.get();
        dispatch(setProducts([...Constructor.list]))
        onUpdate();
    }

    useEffect(() => {
        if(product.list.length > 0) return;
        getData();
    }, [])

  return (
    <Layout>
        <div className="header">
            <h1>KLONTONG ECOMMERCE</h1>
            <Button
                variant="primary"
                onClick={() => navigate("product/create")}
            >
                Create Product
            </Button>
        </div>

        <div className="subheading">
            <h2>Our Products</h2>

            <SearchInput
                value={payload.keyword}
                onChange={(val: string) => {
                    Constructor.setKeyword(val);
                    onUpdate();
                    getData()
                }}
            />
        </div>

        <div className="main">
            { list.map((item: any) => (
                <div key={item.id} className="main_col">
                    <CatalogueCard
                        title={item.title}
                        price={item.price}
                        image={item.thumbnail}
                        onClick={() => navigate(`product/${item.id}`)}
                    />
                </div>
            )) }
        </div>

        <div className="footer">
            <Pagination
                length={meta.length}
                page={product.page}
                onChange={(val: number) => {
                    Constructor.setPagination(val);
                    onUpdate();
                    dispatch(setPage(val))
                    getData();
                }}
            />
        </div>
    </Layout>
  );
}

export default Home;
