package conexaoBanco;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Conecta {

    private static Connection conexao_MySql = null;
    private static String localBD = "localhost";
    private static String database = "workpro";
    private static String LINK = "jdbc:mysql://" + localBD + ":3306/" + database;
    private static final String usuario = "root";
    private static final String senha = "melo";

    // Método para fazer a conexão com um banco de dados MySql
    public Connection connectionMySql() {

        try {
            conexao_MySql = DriverManager.getConnection(LINK, usuario, senha);
            System.out.println("Conexão com o Banco de Dados OK!");
        } catch (SQLException e) {
            throw new RuntimeException("Ocorreu um problema na conexão com o Banco de Dados", e);
        }
        return conexao_MySql;
    }

    public void closeConnectionMySql(Connection con) {
        try {
            if (con != null) {
                con.close();
                System.out.println("Fechamento OK");
            }
        } catch (SQLException e) {
            throw new RuntimeException("Ocorreu um problema para encerrar a conexão com o BD.", e);
        }
    }

    public List<String[]> getPosts() {
        Connection connection = connectionMySql();
        String sql = "SELECT * FROM post";

        List<String[]> posts = new ArrayList<>();

        PreparedStatement preparedStmt;
        try {
            preparedStmt = connection.prepareStatement(sql);
            ResultSet result = preparedStmt.executeQuery();

            //valida resultado
            while (result.next()) {
                String postText = result.getString("postText");
                String postDateTime = result.getString("datetime");

                System.out.println("Postagem: " + postText);
                System.out.println("Data e hora: " + postDateTime);

                int userId = result.getInt("userId");

                String query = "SELECT * FROM user WHERE id = ?";
                preparedStmt = connection.prepareStatement(sql);
                preparedStmt.setInt(1, userId);
                ResultSet rs = preparedStmt.executeQuery();

                while (rs.next()) {
                    String name = rs.getString("name");
                    String surname = rs.getString("surname");
                    //Buscar imagem do usuário

                    System.out.println("Usuário: " + name + " " + surname);

                    String[] post = {postText, postDateTime, name + " " + surname};
                    posts.add(post);
                }
            }

        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return posts;
    }

    public void postPost(String text, String date) {
        Connection connection = connectionMySql();
        String sql = "INSERT INTO post VALUES (null, 1, ?, ?)";

        PreparedStatement preparedStmt;

        try {
            preparedStmt = connection.prepareStatement(sql);
            preparedStmt.setString(1, text);
            preparedStmt.setString(2, date);

            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
