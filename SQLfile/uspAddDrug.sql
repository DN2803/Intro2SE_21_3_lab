USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddDrug]    Script Date: 19/01/2024 16:00:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER PROCEDURE [dbo].[uspAddDrug]
				@id CHAR(4),
				@name NVARCHAR(15),
				@unit NVARCHAR(10),
				@stock INT,
				@iPrice MONEY,
				@oPrice MONEY,
				@ResponseMessage NVARCHAR(100) OUTPUT -- Đầu ra
AS
BEGIN
	BEGIN TRY
		-- Kiểm tra thuốc có tồn tại chưa
		IF EXISTS ( SELECT * FROM THUOC
					WHERE @name = TENTHUOC)
			SET @ResponseMessage = N'Đã tồn tại loại thuốc này!'
		ELSE IF (@stock <= 0)
			SET @ResponseMessage = N'Số lượng không hợp lệ!'
		ELSE IF (@iPrice <= 0)
			SET @ResponseMessage = N'Giá nhập không hợp lệ!'
		ELSE IF (@oPrice <= 0)
			SET @ResponseMessage = N'Giá bán không hợp lệ!'
		ELSE
		BEGIN
			INSERT INTO THUOC(MATHUOC, TENTHUOC, DONVITINH, SOLUONGTON, GIANHAPKHO, GIABAN)
			VALUES (@id, @name, @unit, @stock, @iPrice, @oPrice)
			SET @ResponseMessage = 'successfully'
		END
	END TRY
	BEGIN CATCH
		SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END