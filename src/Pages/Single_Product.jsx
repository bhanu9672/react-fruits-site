import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header_Section from "../Components/Header_Section";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import products from '../data/data';

const Single_Product = () => {

	const product = useParams();




	console.log(product.id)

	return (
		<div>
			<Navbar />
			<Header_Section Current_Page_Title="Single_Product" />
			{products.filter(person => person.id == product.id)
				.map(filter_product => (
					<>
						<div className='container text-center' key={filter_product.id}>
							<div className="card" style={{ width: "30rem" }}>
								<img src={filter_product.img} className="card-img-top" alt="..." />
								<div className="card-body">
									<h3 className="card-title">{filter_product.name}</h3> <br></br>
									<span className='p-2'>${filter_product.sale_price}</span>
									<span className='p-2'>${filter_product.regular_price}</span> <br></br> <br></br>
									<button className='btn btn-outline-primary border-2 py-2 px-4 rounded-pill'>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
					</>
				))
			}
			<Footer />
		</div>
	)
}

export default Single_Product