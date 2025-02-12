import pool from "../config/db";

export const createMenuItem = async (menu_id: number, name: string, description: string, price: number) => {
  const result = await pool.query(
    "INSERT INTO deepnetsoftschema.menu_item (menu_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *",
    [menu_id, name, description, price]
  );
  return result.rows[0];
};

export const getMenuItemsByMenuId = async (menu_id: number) => {
  const result = await pool.query("SELECT * FROM deepnetsoftschema.menu_item WHERE menu_id = $1", [menu_id]);
  return result.rows;
};
