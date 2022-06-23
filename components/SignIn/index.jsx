import {useState} from 'react';

export const SignIn = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    return (
        <form action = '' method = 'post' onSubmit = {(e) => e.preventDefault() && onSubmit()}>
            <div className = 'mb-4'>
                <p>Email address *</p>
                <input value = {formData.email} onChange = {(e) => {
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }} type="email" className = 'd-block w-100 p-4 border rounded' />
            </div>
            <div className = 'mb-4'>
                <p>Password *</p>
                <input value = {formData.password} onChange = {(e) => {
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }} type="password" className = 'd-block w-100 p-4 border rounded' />
            </div>
            <div className = 'py-5'>
                <input type="submit" value = 'LOG IN' className = 'd-inline-block px-5 py-4 border-choco text-choco bg-clear rounded' />
            </div>
        </form>
    )
}


export const Register = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    return (
        <form action = '' method = 'post' onSubmit = {(e) => e.preventDefault() && onSubmit()}>
            <div className = 'mb-4'>
                <p>Email address *</p>
                <input value = {formData.email} onChange = {(e) => {
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }} type="email" className = 'd-block w-100 p-4 border rounded' />
            </div>
            <div className = 'mb-4'>
                <p>Password *</p>
                <input value = {formData.password} onChange = {(e) => {
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }} type="password" className = 'd-block w-100 p-4 border rounded' />
            </div>
            <div className = 'py-5'>
                <input type="submit" value = 'LOG IN' className = 'd-inline-block px-5 py-4 border-choco text-choco bg-clear rounded' />
            </div>
        </form>
    )
}