function LoginInput({ label, type, value, onChange, onKeyPress, disabled }) {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
      />
    </div>
  );
}

export default LoginInput;
