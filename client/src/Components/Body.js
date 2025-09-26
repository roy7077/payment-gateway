import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../assest/videoplayback.webm";
import '../Style/body.css';
import ProductCard from './ProductCard';

/**
 * Body Component - Main landing page component
 * 
 * This component renders the main content area including:
 * - Hero section with promotional image and background video
 * - Product grid displaying fetched products
 * - Navigation to individual product pages
 * 
 * @returns {JSX.Element} The main body content of the application
 */
const Body = () => {
    // State to store fetched products data
    const [data, setData] = useState(null);
    
    // Hook for programmatic navigation between routes
    const navigate = useNavigate();
    
    /**
     * Fetches product data from DummyJSON API
     * 
     * Makes an API call to retrieve product information and updates
     * the component state with the fetched data
     * 
     * @async
     * @function fetchData
     */
    const fetchData = async () => {
        try {
            // Fetch products from external API
            const pro = await fetch('https://dummyjson.com/products');
            const json = await pro.json();
            
            // Update state with products array
            setData(json.products);
        } catch (error) {
            // TODO: Add proper error handling
            console.error('Error fetching products:', error);
        }
    }
    
    /**
     * Effect hook to fetch data on component mount
     * Runs once when the component is first rendered
     */
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this runs only once
    
    /**
     * Handles product card click events
     * 
     * Navigates to the product detail page and passes the selected
     * product data through React Router's state
     * 
     * @param {Object} item - The selected product object
     */
    const handleProductClick = (item) => {
        navigate('/productPage', { state: { product: item } });
    };
    
    return (
        <div className='body'>
            {/* Hero Section */}
            <div className='content-video'>
                {/* Promotional Image Container */}
                <div className='content-video-1'>
                    <img 
                        src="https://c8.alamy.com/comp/2KKFMED/stylish-man-cartoon-male-characters-men-in-fashion-clothes-flat-style-vector-illustration-2KKFMED.jpg"
                        alt="Stylish man cartoon - promotional banner"
                    />
                </div>
                
                {/* Background Video */}
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    aria-label="Background promotional video"
                >
                    {/* Fallback message for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Products Section */}
            <div className='products'>
                <h1>Headphones for you</h1>
                
                {/* Products Grid Container */}
                <div className='products-container'>
                    {data ? (
                        // Render product cards when data is available
                        data.map((item) => (
                            <div 
                                key={item.id} 
                                className='product-item' 
                                onClick={() => handleProductClick(item)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    // Handle keyboard navigation for accessibility
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleProductClick(item);
                                    }
                                }}
                            >
                                <ProductCard product={item} />
                            </div>
                        ))
                    ) : (
                        // Loading state while fetching data
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../assest/videoplayback.webm";
import '../Style/body.css';
import ProductCard from './ProductCard';

/**
 * Body Component - Main landing page component
 * 
 * This component renders the main content area including:
 * - Hero section with promotional image and background video
 * - Product grid displaying fetched products
 * - Navigation to individual product pages
 * 
 * @returns {JSX.Element} The main body content of the application
 */
const Body = () => {
    // State to store fetched products data
    const [data, setData] = useState(null);
    
    // Hook for programmatic navigation between routes
    const navigate = useNavigate();
    
    /**
     * Fetches product data from DummyJSON API
     * 
     * Makes an API call to retrieve product information and updates
     * the component state with the fetched data
     * 
     * @async
     * @function fetchData
     */
    const fetchData = async () => {
        try {
            // Fetch products from external API
            const pro = await fetch('https://dummyjson.com/products');
            const json = await pro.json();
            
            // Update state with products array
            setData(json.products);
        } catch (error) {
            // TODO: Add proper error handling
            console.error('Error fetching products:', error);
        }
    }
    
    /**
     * Effect hook to fetch data on component mount
     * Runs once when the component is first rendered
     */
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this runs only once
    
    /**
     * Handles product card click events
     * 
     * Navigates to the product detail page and passes the selected
     * product data through React Router's state
     * 
     * @param {Object} item - The selected product object
     */
    const handleProductClick = (item) => {
        navigate('/productPage', { state: { product: item } });
    };
    
    return (
        <div className='body'>
            {/* Hero Section */}
            <div className='content-video'>
                {/* Promotional Image Container */}
                <div className='content-video-1'>
                    <img 
                        src="https://c8.alamy.com/comp/2KKFMED/stylish-man-cartoon-male-characters-men-in-fashion-clothes-flat-style-vector-illustration-2KKFMED.jpg"
                        alt="Stylish man cartoon - promotional banner"
                    />
                </div>
                
                {/* Background Video */}
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    aria-label="Background promotional video"
                >
                    {/* Fallback message for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Products Section */}
            <div className='products'>
                <h1>Headphones for you</h1>
                
                {/* Products Grid Container */}
                <div className='products-container'>
                    {data ? (
                        // Render product cards when data is available
                        data.map((item) => (
                            <div 
                                key={item.id} 
                                className='product-item' 
                                onClick={() => handleProductClick(item)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    // Handle keyboard navigation for accessibility
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleProductClick(item);
                                    }
                                }}
                            >
                                <ProductCard product={item} />
                            </div>
                        ))
                    ) : (
                        // Loading state while fetching data
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../assest/videoplayback.webm";
import '../Style/body.css';
import ProductCard from './ProductCard';

/**
 * Body Component - Main landing page component
 * 
 * This component renders the main content area including:
 * - Hero section with promotional image and background video
 * - Product grid displaying fetched products
 * - Navigation to individual product pages
 * 
 * @returns {JSX.Element} The main body content of the application
 */
const Body = () => {
    // State to store fetched products data
    const [data, setData] = useState(null);
    
    // Hook for programmatic navigation between routes
    const navigate = useNavigate();
    
    /**
     * Fetches product data from DummyJSON API
     * 
     * Makes an API call to retrieve product information and updates
     * the component state with the fetched data
     * 
     * @async
     * @function fetchData
     */
    const fetchData = async () => {
        try {
            // Fetch products from external API
            const pro = await fetch('https://dummyjson.com/products');
            const json = await pro.json();
            
            // Update state with products array
            setData(json.products);
        } catch (error) {
            // TODO: Add proper error handling
            console.error('Error fetching products:', error);
        }
    }
    
    /**
     * Effect hook to fetch data on component mount
     * Runs once when the component is first rendered
     */
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this runs only once
    
    /**
     * Handles product card click events
     * 
     * Navigates to the product detail page and passes the selected
     * product data through React Router's state
     * 
     * @param {Object} item - The selected product object
     */
    const handleProductClick = (item) => {
        navigate('/productPage', { state: { product: item } });
    };
    
    return (
        <div className='body'>
            {/* Hero Section */}
            <div className='content-video'>
                {/* Promotional Image Container */}
                <div className='content-video-1'>
                    <img 
                        src="https://c8.alamy.com/comp/2KKFMED/stylish-man-cartoon-male-characters-men-in-fashion-clothes-flat-style-vector-illustration-2KKFMED.jpg"
                        alt="Stylish man cartoon - promotional banner"
                    />
                </div>
                
                {/* Background Video */}
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    aria-label="Background promotional video"
                >
                    {/* Fallback message for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Products Section */}
            <div className='products'>
                <h1>Headphones for you</h1>
                
                {/* Products Grid Container */}
                <div className='products-container'>
                    {data ? (
                        // Render product cards when data is available
                        data.map((item) => (
                            <div 
                                key={item.id} 
                                className='product-item' 
                                onClick={() => handleProductClick(item)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    // Handle keyboard navigation for accessibility
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleProductClick(item);
                                    }
                                }}
                            >
                                <ProductCard product={item} />
                            </div>
                        ))
                    ) : (
                        // Loading state while fetching data
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
