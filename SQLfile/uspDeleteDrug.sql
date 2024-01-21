USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspDeleteDrug]    Script Date: 19/01/2024 15:58:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER PROCEDURE [dbo].[uspDeleteDrug]
			@maThuoc CHAR(4),
			@ResponseMessage NVARCHAR(100) OUTPUT
AS
BEGIN
	BEGIN TRY
		IF EXISTS (SELECT * FROM THUOC
				   WHERE @maThuoc = MATHUOC)
		BEGIN
			DELETE FROM THUOC
			WHERE MATHUOC = @maThuoc

			DECLARE @STT INT;
			SET @STT = CONVERT(INT, SUBSTRING(@maThuoc, 3, 2));
			DELETE FROM THUOC_COUNTER
			WHERE THUOC_COUNTER.COUNTER = @STT

			SET @ResponseMessage = 'successfully'
		END
		ELSE
			SET @ResponseMessage = 'something went wrong'
	END TRY
	BEGIN CATCH
        SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END