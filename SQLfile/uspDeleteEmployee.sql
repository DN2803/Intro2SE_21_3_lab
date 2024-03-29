USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspDeleteEmployee]    Script Date: 1/18/2024 4:06:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspDeleteEmployee]
    @maNV CHAR(10),
    @ResponseMessage NVARCHAR(100) OUTPUT
AS
BEGIN
    BEGIN TRY
        DECLARE @prefix VARCHAR(2) = LEFT(@maNV, 2);

        IF (@prefix = 'BS')
        BEGIN
            DELETE FROM BACSI
			WHERE MABACSI = @maNV
        END
        ELSE
        BEGIN
            DELETE FROM DUOCSI
			WHERE MADUOCSI = @maNV
        END

        SET @ResponseMessage = 'Xóa thành công';
    END TRY
    BEGIN CATCH
        SET @ResponseMessage = ERROR_MESSAGE();
    END CATCH
END;