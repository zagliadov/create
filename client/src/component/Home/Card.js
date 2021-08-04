import React from 'react';

import classes from './home.module.sass';

export const Card = ({ products }) => {
    return (
        <>
            {products && products.map(product => {
                return (
                    <div className={classes.card__name} key={product?._id}>
                        <div>
                            <h2>{product?.product}</h2>
                        </div>
                        <div className={classes.card__body}>
                            <div className={classes.card__body_item_img}>
                                {(product?.picture?.length > 0) ?
                                    <img src={product?.picture[0]} alt={product.product}
                                        className={classes.big__picture} />
                                    : <div className={classes.picture__none}></div>}
                                <div>
                                    {(product?.picture?.length > 1) ?
                                        <img src={product?.picture[1]} alt={product.product}
                                            className={classes.small__picture} />
                                        : <div className={classes.picture__none}></div>}
                                    {(product?.picture?.length > 2) ?
                                        <img src={product?.picture[2]} alt={product.product}
                                            className={classes.small__picture} />
                                        : <div className={classes.picture__none}></div>}
                                </div>

                            </div>
                            <div className={classes.card__body_item}>
                                Цена
                            </div>
                            <div className={classes.card__body_item}>
                                <h5>Торговая марка: {product.brand}</h5>
                                <h5>Возраст собаки: {product.age}</h5>
                                <h5>Животное: {product.pettype}</h5>
                                <h5>Категория: {product.feedtype}</h5>
                                <h5>Размер породы: {product.breedsize}</h5>
                            </div>
                        </div>

                    </div>

                )
            })}
        </>

    );
}
