CREATE FUNCTION fn_GetNextMABACSI()
RETURNS CHAR(10)
AS
BEGIN
    DECLARE @nextId INT
    SELECT @nextId = COUNT(*) FROM BACSI

    RETURN 'BS' + RIGHT('000' + CAST(@nextId AS VARCHAR(3)), 3)
END

CREATE TRIGGER trg_AutoGenerateMABACSI ON BACSI
AFTER INSERT
AS
BEGIN
    DECLARE @id INT, @maBacSi CHAR(10)
    SELECT @id = ID FROM INSERTED

    -- Gọi hàm để tạo mã BS
    SET @maBacSi = dbo.fn_GetNextMABACSI()

    -- Cập nhật bảng
    UPDATE BACSI SET MABACSI = @maBacSi WHERE ID = @id
END