export default () => {
    return <></>
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context
    const cookie = cookies['COLSON_ECOMMERCE_ADMIN'] || false

    if(!cookie){
        return {
            redirect: {
                destination: '/admin/login'
            }
        }
    }
    else{
        return {
            redirect: {
                destination: '/admin/home'
            }
        }
    }
}