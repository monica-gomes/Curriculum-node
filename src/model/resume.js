const getResume = (sequelize, DataTypes) => {
    const Resume = sequelize.define("resume", {
        nome: DataTypes.STRING,
        experiencia: DataTypes.STRING,
        educacao: DataTypes.STRING,
        habilidades: DataTypes.STRING,
        idiomas: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            } 
         },
        telefone: DataTypes.STRING,
        endereco: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        website: DataTypes.STRING
    });

    return Resume;
}

export default getResume;