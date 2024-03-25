import './cInput.css'

export const CInput = ({className,type,name,value, placeholder, onChange, onBlur, onClick}) => {
    return (
        <input
            className={className}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onClick={onClick}
        />
    )
}