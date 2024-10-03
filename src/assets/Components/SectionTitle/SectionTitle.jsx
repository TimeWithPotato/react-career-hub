const SectionTitle = ({title,par}) => {
    return (
        <div className="text-center">
            <h2 className="text-5xl">{title}</h2>
            <p className="text-md">{par}</p>
        </div>
    );
};

export default SectionTitle;