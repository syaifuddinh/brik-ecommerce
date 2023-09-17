import React from 'react';
import "assets/css/_show.page.scss";
import { useState } from "react"
import { useEffect } from "react"
import { Product } from "interfaces/product";
import BackwardButton from "ui/button/backward";
import { useNavigate } from "react-router-dom"; 
import { useParams } from "react-router-dom"; 
import ProductModel from "models/product/product.show";
import Layout from "layouts/index"

function ShowingProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [payload, setPayload] = useState({...ProductModel.getParsedPayload()})

    const getData = async (id: string) => {
        await ProductModel.get(id)
        setPayload({...ProductModel.getParsedPayload()})
    }

    useEffect(() => {
        getData(params.id as string)
    }, [params.id])

  return (
        <Layout>
            <div className="show-container">
                <div className="heading">
                    <BackwardButton
                        onClick={() => navigate(-1)}
                    />
                    <h1>Detail Product</h1>
                </div>

                <div className="main">
                    <div className="main_thumbnail">
                        <img
                            src={payload.thumbnail}
                        />
                    </div>
                    <div className="main_content">
                        <div className="main_content__title">
                            { payload.title }
                        </div>
                        <div className="main_content__price">
                            { payload.price }
                        </div>
                        <div className="main_content__category">
                            <div className="label">Category</div>
                            <div className="content">
                                {  payload.categoryName }
                            </div>
                        </div>
                        <div className="main_content__description">
                            <div className="label">Description</div>
                            <div className="content">
                                { payload.description }
                            </div>
                        </div>

                        <div className="main_content__dimension">
                            <div className="row">
                                <div className="col">
                                    <div className="label">Weight</div>
                                    <div className="content">
                                        { payload.weight }
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="label">Length</div>
                                    <div className="content">
                                        { payload.length }
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="label">Width</div>
                                    <div className="content">
                                        { payload.width }
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="label">Height</div>
                                    <div className="content">
                                        { payload.height }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  );
}

export default ShowingProduct;
