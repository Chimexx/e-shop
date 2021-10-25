import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
    
`
export const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;

        ${mobile({ padding: '10px 10px' })}


    .left{
        flex: 1;
        display: flex;
        align-items: center;

        ${mobile({ flex: 0.2 })}


    }
    .left .language{
        font-size: 14px;
        cursor: pointer;

        /* ${mobile({ display: 'none' })} */

    }
    .searchContainer{
        display: flex;
        border: 0.5px solid lightgray;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        border-radius: 5px;
        padding: 5px;

        ${mobile({ display: 'none' })}
    }

    .searchContainer input{
        outline: none;
        border: none;
        font-size: 16px;

    }
    .center{
        flex: 1;
        ${mobile({ justifyContent: 'flex-start', flex: 0.5 })}
    }

    .center .logo{
        font-weight: 800;
        font-size: 20px;
        text-align: center;

        ${mobile({ textAlign: 'left', paddingBottom: '3px' })}

    }
    .right{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-content: center;

        ${mobile({ marginRight: '10px' })}
    }

    .right .menu-item{
        margin-left: 25px;
        ${mobile({ marginLeft: '15px', paddingTop: '5px' })}

    }

`