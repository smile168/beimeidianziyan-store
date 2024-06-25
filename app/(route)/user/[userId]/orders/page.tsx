import getProducts from "@/actions/get-products";
import OrderHistoryList from "@/components/ui/orderHistoryList";

interface OrderHistoryProps {
    params: {
        userId: string;
    }
};

const OrderHistoryPage: React.FC<OrderHistoryProps> = async ({ params }) => {
    // const orderHistoryArr = await getOrderHistory({
    //     userId: params.userId
    // });
    // 
    const orderHistoryArr = await getProducts({
        categoryId: '0ac08371-9409-4418-8b19-1d9405ca985e',
      });
    console.log(orderHistoryArr);

    return (
        <div className="bg-white mx-auto max-w-7xl">
            <div className="px-4 sm:px-6 lg:px-8 py-24">
            <div >
                <p className="text-2xl font-bold">
                    订单历史
                </p>
                <p>Check the status of recent orders, manage returns, and discover similar products.</p>
            </div>
            <div>
                {orderHistoryArr.map((eachOrder: any) => (
                    <OrderHistoryList key={eachOrder.id} eachOrderInfo={eachOrder}></OrderHistoryList>
                ))}
                
            </div>
            </div>
            
        </div>
    )
}

export default OrderHistoryPage;