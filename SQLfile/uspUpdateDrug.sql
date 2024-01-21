CREATE OR ALTER PROCEDURE uspUpdateDrug
			@maThuoc CHAR(4),
			@tenThuoc NVARCHAR(15),
			@donViTinh NVARCHAR(10),
			@soLuong INT,
			@giaNhap MONEY,
			@giaBan MONEY,
			@ResponseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT *
				   FROM THUOC
				   WHERE MATHUOC = @maThuoc)
		BEGIN
			UPDATE THUOC
			SET TENTHUOC = @tenThuoc, DONVITINH = @donViTinh, SOLUONGTON = @soLuong, GIANHAPKHO = @giaNhap, GIABAN = @giaBan
			WHERE MATHUOC = @maThuoc

			SET @ResponseMessage = 'successfully'
		END
		ELSE
			SET @ResponseMessage = 'something went wrong'
	END TRY
	BEGIN CATCH
		SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END